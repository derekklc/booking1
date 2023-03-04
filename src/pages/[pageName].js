import { PageNames } from "bk/constants"

import Layout from "bk/components/wrappers/Layout"

export default function Post(props) {
  return <Layout pageName={props.pageName} />
}

export async function getStaticPaths() {
  const paths = Object.values(PageNames).map((page) => {
    return {
      params: {
        pageName: page,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(staticProps) {
  return {
    props: { pageName: staticProps.params.pageName },
  }
}
