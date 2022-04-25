import { useEffect, usestate } from "react";
import { EmployeeContext } from "../context/Auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const EmployeeList = () => {
  const { list } = useContext(EmployeeContext);
  const { id } = useParams();
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {list.map((el) => (
        <Link to={`/employee/${el.id}`}>
          <div className="employee_card" key={el.id}>
            <img className="employee_image" src="{el.image}" />
            <span className="employee_name">{el.employee_name}</span>
            <span className="employee_title">{el.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
