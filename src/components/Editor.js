import { gql, useMutation, useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import { Editor as TinymceEditor } from "@tinymce/tinymce-react";
import { language } from "../index";
const Editor = ({ type }) => {
  const isEn = useContext(language);
  const [status, setStatus] = useState("");
  const [updatePost] = useMutation(gql`
    mutation($id: ID!, $change: String) {
      updatePost(id: $id, data: { body: $change }) {
        id
      }
    }
  `);
  const { data, refetch } = useQuery(
    gql`
      query($lang: String, $type: String) {
        allPosts(where: { hashtags_every: { url_in: [$type, $lang] } }) {
          id
          body
          title
        }
      }
    `,
    {
      variables: { lang: isEn ? "tieng-anh" : "tieng-viet", type },
    }
  );
  const [change, setChange] = useState();
  const handleEditorChange = (content, editor) => {
    setChange(content);
  };
  const handleUpdate = () => {
    setStatus("...");
    updatePost({
      variables: { id: data?.allPosts[0]?.id, change },
    }).then(() => {
      setStatus(isEn ? "Update successful" : "Cập nhật thành công");
      refetch();
    });
  };
  return data?.allPosts?.length ? (
    <div className="mb-5">
      <TinymceEditor
        apiKey="fonkc6aeu73fk633tn80fazl5xg3zvfhvg2aasg3csqlmjtr"
        init={{
          height: 500,
          menubar: false,
        }}
        value={data.allPosts[0]?.body}
        onEditorChange={handleEditorChange}
      />
      <button className="btn btn-outline-primary my-3" onClick={handleUpdate}>
        {isEn ? "Update " : "Cập nhật "}
        {data.allPosts[0]?.title}
      </button>
      <pre className=" mb-5">{status}</pre>
    </div>
  ) : (
    <pre>loading...</pre>
  );
};
export default Editor;
