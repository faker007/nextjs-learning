import MainHeader from './main-header';

function Layout(props) {
  return (
    <>
      <MainHeader />
      <header></header>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
