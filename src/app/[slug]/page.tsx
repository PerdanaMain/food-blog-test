"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
// components
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import Modal from "../components/Modal";

interface Categories {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
interface Meals {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const Page = () => {
  const pathname = usePathname();

  const [categories, setCategories] = useState<Categories[]>([]);
  const [meals, setMeals] = useState<Meals[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(data.categories);
    };
    const fetchMeals = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
          pathname.slice().split("/")[1]
        }`
      );
      setMeals(data.meals);
      setIsLoading(false);
    };

    fetchCategories();
    fetchMeals();
  }, [pathname]);
  return (
    <>
      {/*start top header*/}
      <Header categories={categories} />
      {/*end top header*/}
      {/*start page content*/}
      <div className="page-content">
        {/*start tabular product*/}
        <section className="section-padding">
          <div className="container">
            <div className="text-center pb-3">
              <h3 className="mb-0 fw-bold">
                Embark on a Gastronomic Odyssey: Where Every Dish Whispers a
                Tale of Tradition,
              </h3>
              <p className="mb-0 text-capitalize">
                Every Sip Echoes the Artistry of Flavor. Taste the
                Extraordinary, Indulge in the Unforgettable!
              </p>
            </div>
            <hr />
            <div className="blog-cards">
              <div className="row row-cols-1 row-cols-lg-3 g-4">
                {isLoading ? (
                  <div className="text-center" style={{ marginLeft: "450px" }}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  meals.map((meal, index) => (
                    <div className="col mb-4" key={index}>
                      <div className="card" style={{ height: "100%" }}>
                        <img
                          src={meal.strMealThumb}
                          className="card-img-top rounded-0"
                          alt="..."
                          style={{ height: "100%", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title fw-bold mt-3">
                            {meal.strMeal}
                          </h5>
                          <Modal id={meal.idMeal} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {/*end row*/}
            </div>
          </div>
        </section>
        {/*end tabular product*/}
      </div>
      {/*end page content*/}
      <Copyright />
    </>
  );
};

export default Page;
