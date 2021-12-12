import classes from "./SingleCategory.module.css"
import { useState } from 'react';

const SingleCategory = ({ category }) => {
    return (
        <>
            <div className="d-flex align-items-center">
                <span>
                    {category.icon}
                </span>
                <p>{category.title}</p>
                {category.category && (
                    <span>
                        <i class="fas fa-chevron-down"></i>
                    </span>
                )}

            </div>
            <div className="ms-5">
                {category.category?.map((ca) => (
                    <SingleCategory key={ca.id} category={ca} />
                ))}
            </div>
        </>
    );
}

export default SingleCategory;

