"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// components
import Header from "./components/Header";
import Copyright from "./components/Copyright";

interface Categories {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Home = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(data.categories);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <>
      {/*start top header*/}
      <Header categories={categories} />
      {/*end top header*/}
      {/*start page content*/}
      <div className="page-content">
        {/*start tabular product*/}
        <section className="product-tab-section section-padding bg-light">
          <div className="container">
            <div className="text-center pb-3">
              <h3 className="mb-0 h3 fw-bold">
                Savor the Moments, Taste the Joy!
              </h3>
              <p className="mb-0 text-capitalize">
                Indulge in Flavorful Escapes: Culinary Creations Crafted with
                Passion and Precision!
              </p>
            </div>

            <hr />
            <div className="tab-content tabular-product">
              <div className="tab-pane fade show active" id="new-arrival">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                  {isLoading ? (
                    <div
                      className="text-center"
                      style={{ marginLeft: "450px" }}
                    >
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      ></div>
                    </div>
                  ) : (
                    categories.map((ctg, index) => (
                      <div className="col" key={index}>
                        <div className="card">
                          <div className="position-relative overflow-hidden">
                            <a href={`/${ctg.strCategory.toLowerCase()}`}>
                              <img
                                src={ctg.strCategoryThumb}
                                className="card-img-top"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="card-body">
                            <div className="product-info text-center">
                              <h6 className="mb-1 fw-bold product-name">
                                {ctg.strCategory}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
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

export default Home;
