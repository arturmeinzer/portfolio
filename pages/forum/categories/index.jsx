import React from "react";
import BaseLayout from "../../../layouts/BaseLayout";

const Categories = () => (
    <BaseLayout>
        <section className="section-title">
            <div className="px-2">
                <div className="pb-4">
                    <h1>Categories</h1>
                </div>
            </div>
        </section>
        <section className="fj-category-list">
            <div className="row">
                <div className="col-md-4">
                    <div className="fj-category-container">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="fj-category subtle-shadow no-border" href="#">
                            {
                                // <div className="category-icon">
                                //   <img src="images/pen.png" />
                                // </div>
                            }
                            <div className="category-information">
                                <div className="heading gray-90">
                                    General Discussion
                                </div>
                                <div className="description">
                                    Just general question
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="fj-category-container">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="fj-category subtle-shadow no-border" href="#">
                            {
                                // <div className="category-icon">
                                //   <img src="images/pen.png" />
                                // </div>
                            }
                            <div className="category-information">
                                <div className="heading gray-90">
                                    Other Discussion
                                </div>
                                <div className="description">
                                    Just general question
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="fj-category-container">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="fj-category subtle-shadow no-border" href="#">
                            {
                                // <div className="category-icon">
                                //   <img src="images/pen.png" />
                                // </div>
                            }
                            <div className="category-information">
                                <div className="heading gray-90">
                                    Some Discussion
                                </div>
                                <div className="description">
                                    Just general question
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </BaseLayout>
);

export default Categories;
