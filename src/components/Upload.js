import { gql, useMutation, useQuery } from "@apollo/client";
import { Fragment, useContext, useState } from "react";
import { language } from "..";

const UploadFile = () => {
  const isEn = useContext(language);
  const [alert, setAlert] = useState();
  const { data } = useQuery(
    gql`
      query($address: String) {
        allFileUploads(where: { address: $address }) {
          id
          file {
            publicUrl
            originalFilename
          }
          address
        }
      }
    `,
    {
      variables: {
        address: isEn ? "10Signals.rar" : "10SignalsV.rar",
      },
    }
  );
  const [updateFileUpload] = useMutation(gql`
    mutation update($id: ID!, $file: Upload!) {
      updateFileUpload(id: $id, data: { file: $file }) {
        id
        file {
          publicUrl
          originalFilename
        }
        address
        __typename
      }
    }
  `);

  return (
    <Fragment>
      <input
        className="mb-3"
        type="file"
        required
        onChange={({
          target: {
            validity,
            files: [file],
          },
        }) => {
          setAlert("...");
          setTimeout(() => {
            setAlert("");
          }, 3000);
          return (
            validity.valid &&
            updateFileUpload({
              variables: { file, id: data?.allFileUploads[0]?.id },
            })
              .then(() => {
                setAlert("Tải lên thành công");
              })
              .catch((e) => {
                setAlert("Lỗi " + e.toString());
              })
          );
        }}
      />
      <pre>{alert}</pre>
      <pre>{data?.allFileUploads[0]?.file?.originalFilename}</pre>
    </Fragment>
  );
};
export default UploadFile;
