import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { language } from "..";

const Content = ({ type }) => {
  const isEn = useContext(language);
  const { data, error, loading } = useQuery(
    gql`
      query($lang: String, $type: String) {
        allPosts(where: { hashtags_every: { url_in: [$type, $lang] } }) {
          id
          body
        }
      }
    `,
    {
      variables: { lang: isEn ? "tieng-anh" : "tieng-viet", type },
    }
  );
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: data?.allPosts[0]?.body }}
    ></div>
  );
};
export default Content;
