import "./University.scss";
import React from "react";
import api from "../../api";
import CustomLink from "../../components/CustomLink";

class University extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      university: null,
    };
  }

  async loadCourses() {
    const id = this.props.match.params.id;
    const university = await api.get(`/universidades/${id}`);
    console.log(university);
    const { data } = await api.get(`/universidades/${id}/cursos`);
    this.setState({ data });
    this.setState({ university: university.data[0] });
  }

  listCourses() {
    const items = this.state.data.map((item) => {
      return (
        <div className="university__course" key={item.id}>
          <div>
            <span className="university__course__name">{item.nome}</span>
          </div>
        </div>
      );
    });

    return items;
  }

  componentDidMount() {
    this.loadCourses();
  }

  render() {
    return (
      <div className="university">
        <h2 className="university__title">
          {this.state.university ? this.state.university.nome : "Carregando"}
        </h2>
        <div className="university__list">
          <div class="university__label">Cursos de tecnologia disponíveis</div>
          <div className="university__courses">
            {this.state.data === null || this.state.university === null
              ? "Carregando"
              : this.listCourses()}
          </div>
          <div className="university__go-back">
            <CustomLink to="/" label="Voltar" />
          </div>
        </div>
      </div>
    );
  }
}
export default University;
