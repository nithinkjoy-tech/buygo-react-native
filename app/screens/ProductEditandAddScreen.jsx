import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";
import colors from "../config/colors";
import productApi from "../api/productApi";
import pick from "lodash/pick";
import { showMessage, } from "react-native-flash-message";

function ProductEditandAddScreen({navigation,route}) {

  const mobileId=route.params?.mobileId

  const validationSchema = Yup.object().shape({
    mobileName: Yup.string().required(),
    feature1: Yup.string().required().min(3),
    feature2: Yup.string().required().min(3),
    feature3: Yup.string().required().min(3),
    feature4: Yup.string().required().min(3),
    price: Yup.number().required().min(0),
    description: Yup.string().required().min(5).max(3000),
    numberInStock: Yup.number().required(),
    imageUrl: Yup.string().required(),
  });

  const displayMessage=(message)=>{
    showMessage({
      message,
      type: "info",
    })
  }

  const [initialValues, setInitialValues] = useState({
    mobileName: "",
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    price: "",
    description: "",
    numberInStock: "",
    imageUrl: "",
  });

  const getMobileById = async () => {
    if(!mobileId) return
    const data = await productApi.getMobileById(mobileId);
    setInitialValues(pick(data, Object.keys(initialValues)));
  };

  useEffect(() => {
    getMobileById();
  }, []);

  const handleSubmit = async(mobileData) => {
    if (!mobileId) {
      await productApi.createNewMobile(mobileData)
      displayMessage("Succesfully added a new product")
    }else{
      await productApi.updateMobileById(mobileId, mobileData);
      displayMessage("Succesfully modified your product details")
    }

    navigation.navigate("Products")
  };
 
  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        onSubmit={values => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="mobileName"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="star"
          name="feature1"
          placeholder="Feature 1"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="star"
          name="feature2"
          placeholder="Feature 2"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="star"
          name="feature3"
          placeholder="Feature 3"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="star"
          name="feature4"
          placeholder="Feature 4"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="cash"
          name="price"
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="text"
          name="description"
          placeholder="Description"
          multiline
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="numeric"
          name="numberInStock"
          placeholder="Number In Stock"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="link"
          name="imageUrl"
          placeholder="Image Url"
        />
        <SubmitButton title="Save" color={colors.secondary} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProductEditandAddScreen;
