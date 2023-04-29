import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/adminmenu.css';


export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    patronymic: "",
    email: "",
    username: "",
    password:"",
    roles: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`);
    setUser(result.data);
  };

  return (
    <form className="white-background d-flex justify-content-center align-items-center" >
    <div className="container admin-background">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Информация о пользователе</h2>

          <div className="card  mx-auto">
            <div className="card-header">
              ИД : {user.id}
              <ul className="list-group list-group-flush">

              <li className="list-group-item">
                  <b>Имя:</b>
                  {user.name}
                </li>

                <li className="list-group-item">
                  <b>Фамилия:</b>
                  {user.surname}
                </li>

                <li className="list-group-item">
                  <b>Отчество:</b>
                  {user.patronymic}
                </li>

              <li className="list-group-item">
                  <b>Почта:</b>
                  {user.email}
                </li>

                <li className="list-group-item">
                  <b>Логин:</b>
                  {user.username}
                </li>
                

                <li className="list-group-item">
                  <b>Роль:</b>
                  {user.roles}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-dark my-2" to={"/activeusers"}>
            Вернуться назад
          </Link>
        </div>
      </div>
    </div>
    </form>
  );
}