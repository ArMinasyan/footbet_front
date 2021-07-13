import Main from "./Main";
import WithoutPhoto from "./WithoutPhoto";
import Register from "./Register";
import Error from "./Error"

const layouts = {
  main: Main,
  withoutPhoto: WithoutPhoto,
  register: Register
};

const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return <Error {...props}>{props.children}</Error>;
};

export default LayoutWrapper;
