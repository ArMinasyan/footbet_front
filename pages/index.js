import Main from '/components/Pages/Main/Main'
import { getSession } from "next-auth/client"


const IndexPage = () => <Main />

IndexPage.layout = "main";

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}

export default IndexPage;
