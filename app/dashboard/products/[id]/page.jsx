import React from "react";
import styles from "../../../ui/dashboard/products/singleProduct.module.css";
import Image from "next/image";
function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        John doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder="John doe" />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder="jod@gmail.com" />
          <label htmlFor="">Stock</label>
          <input type="text" name="Password" />
          <label htmlFor="">Color</label>
          <input type="text" name="phone" placeholder="123455" />
          <label htmlFor="">Size</label>
          <input type="text" name="address" placeholder="new york" />
          <label htmlFor="">Cat</label>
          <select name="isAdmin" id="isAdmin">
            <option value={"kitchen"}>kitchen</option>
            <option value={"Computers"}>Computers</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="description"
          ></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
