import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { UbicacionesContext } from "../../contexts/UbicacionesContext";
import logo from "../../assets/logo.png";
import "./Navegacion.css";
import { listaPredefinida } from "../../listaPredefinida";
import swal from "sweetalert";

//ESTE COMPONENTE PERMITE LA NAVEGACION DE NUESTRA APLICACION
const Navegacion = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { listaUbicaciones, setListaUbicaciones } =
    useContext(UbicacionesContext);

  //CADA VEZ QUE SE ACTUALIZA EL ESTADO GLOBAL DE USUARIO ,CAMBIA LA CONFIGURCION DE NUETRA NAVEGACION
  useEffect(() => {
    const secionStored = JSON.parse(localStorage.getItem("secionDeUsuario"));
    console.log({ secionStored });
    console.log(currentUser);
    if (currentUser !== null && secionStored !== null) {
      if (currentUser.username === secionStored.name) {
        setListaUbicaciones(secionStored.ubicaciones);
      } else {
        setListaUbicaciones(listaPredefinida);
      }
    } else {
      setListaUbicaciones(listaPredefinida);
    }
  }, [currentUser]);

  const handleSignOut = () => {
    const informacionDeUsuario = {
      name: currentUser.username,
      ubicaciones: listaUbicaciones,
    };
    console.log(informacionDeUsuario);
    localStorage.setItem(
      "secionDeUsuario",
      JSON.stringify(informacionDeUsuario)
    );
    setCurrentUser(null);
    setListaUbicaciones(listaPredefinida);
  };
  const Alerta = () => {
    swal(
      "Acceso denegado",
      "Inicie secion para poder agregar ubicaciones!!!",
      "warning"
    );
  };
  return (
    <>
      <div className="navegacion">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <h4>
          {currentUser ? (
            <Link className="nav-link" to="/ubicacion/create">
              Agregar Ciudad{" "}
            </Link>
          ) : (
            <span className="nav-link" onClick={() => Alerta()}>
              Agregar Ciudad
            </span>
          )}
          {currentUser ? (
            <span onClick={handleSignOut}>
              <Link className="nav-link" to="/">
                Cerrar sesión
              </Link>
            </span>
          ) : (
            <Link className="nav-link" to="/login">
              Iniciar sesión
            </Link>
          )}
          </h4>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navegacion;
