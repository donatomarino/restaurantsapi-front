import Table from "../components/Table";
import Header from "../components/Header";

const Home = () => {
  const token = localStorage.getItem('token');

  // Si el usuario no está logueado, redirigir a la página unauthorized
  if (!token) {
    window.location.replace('/unauthorized');
    return null;
  }
  
  return (
    <>
      <Header />
      <Table />
    </>
  )
}

export default Home;