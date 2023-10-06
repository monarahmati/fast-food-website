import React, { useEffect, useState } from "react";
import axios from "../../Axios";
//imporrt components
import Loading from "../Loading/Loading";
import SearchBar from "../searchBar/searchBar";


const CategoryList = ({ filterItems , children }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchapicategory = async () => {
      const res = await axios.get("/FoodCategory/categories");
      setCategory(res.data);
      setLoading(false);
    };

    fetchapicategory();
  }, []);

  const renderLoading = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="ps-3 w-100 align-items-center d-flex justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item" onClick={() => filterItems()}>
            <a href="#" className="nav-link">
              همه فست فودها
            </a>
          </li>
          {category.map((category) => (
            <li
              className="nav-item"
              key={category.id}
              onClick={() => filterItems(category.id)}
            >
              <a href="#" className="nav-link">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </div>
    );
  };

  return (
    <nav className="container mt-n5">
      <div className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4">
        {renderLoading()}
      </div>
    </nav>
  );
};

export default CategoryList;
