import CustomLink from "../../components/CustomLink";
import "./Home.scss";
import Async from "react-async";
import api from "../../api";

const loadUniversities = async () => {
  const { data } = await api.get("/universidades");
  return data;
};

const UserPlaceholder = () => (
  <div>
    <div>User Details Loading</div>
  </div>
);

const ListUniversities = ({ data }) => {
  const items = data.universidades.map((item) => {
    return (
      <div key={item.id} className="home__list__card">
        <div>
          <span className="home__list__card-label">{item.sigla}</span>
        </div>
        <div>
          <span>Nome: </span>
          <span className="home__list__card-info">{item.nome}</span>
        </div>
      </div>
    );
  });

  return items;
};

const App = () => (
  <div className="home">
    {/* <div className="home__link">
      <CustomLink to="/university" label="Produto" />
    </div> */}

    <div className="home__list">
      <Async promiseFn={loadUniversities}>
        <Async.Pending>
          <UserPlaceholder />
        </Async.Pending>
        <Async.Fulfilled>
          {(data) => <ListUniversities data={data} />}
        </Async.Fulfilled>
        <Async.Rejected>{(error) => <p>{error.message}</p>}</Async.Rejected>
      </Async>
    </div>
  </div>
);

export default App;
