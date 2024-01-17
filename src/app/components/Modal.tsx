import React, { useState, useEffect } from "react";
import axios from "axios";

interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
}
const Modal = ({ id }: { id: string }) => {
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    const fetchMeal = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(data.meals[0]);
    };
    fetchMeal();
  }, [id]);

  return (
    <div>
      <button
        className="btn btn-outline-dark btn-ecomm mt-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Read More
      </button>

      <div className="modal fade" id="staticBackdrop" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {
                  // @ts-ignore
                  meal?.strMeal
                }
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container">
                <img
                  src={
                    // @ts-ignore
                    meal?.strMealThumb
                  }
                  alt=""
                  className="img-fluid rounded mb-3 w-90 h-90 d-block mx-auto"
                />
                <h5 className="fw-bold mt-3">Instructions</h5>
                <p className="text-muted">
                  {
                    // @ts-ignore
                    meal?.strInstructions
                  }
                </p>
                <h5 className="fw-bold">Tutorial</h5>
                <iframe
                  width="100%"
                  height="315"
                  src={
                    // @ts-ignore
                    meal?.strYoutube.replace("watch?v=", "embed/")
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
