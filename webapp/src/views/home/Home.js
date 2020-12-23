import "./Home.scss";
import Async from "react-async";
import api from "../../api";

import { Link, HashRouter as Router } from "react-router-dom";

const loadUniversities = async () => {
  const { data } = await api.get("/universidades");
  return data;
};

const Placeholder = () => (
  <div>
    <div>Carregando universidades</div>
  </div>
);

const ListUniversities = ({ data }) => {
  const items = data.universidades.map((item) => {
    return (
      <Router key={item.id}>
        <Link to={`/university/${item.id}`}>
          <div className="home__list__card">
            <div>
              <span className="home__list__card-label">{item.sigla}</span>
            </div>
            <div>
              <span>Nome: </span>
              <span className="home__list__card-info">{item.nome}</span>
            </div>
          </div>
        </Link>
      </Router>
    );
  });

  return <div class="home__gap">{items}</div>;
};

const Home = () => (
  <div className="home">
    {/* <div className="home__link">
      <CustomLink to="/university" label="Produto" />
    </div> */}

    <div className="home__title">
      Universidades de Fortaleza com cursos de TI
    </div>

    <div className="home__list">
      <Async promiseFn={loadUniversities}>
        <Async.Pending>
          <Placeholder />
        </Async.Pending>
        <Async.Fulfilled>
          {(data) => <ListUniversities data={data} />}
        </Async.Fulfilled>
        <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
      </Async>
    </div>
  </div>
);

export default Home;
