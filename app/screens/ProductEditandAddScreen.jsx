import React, {useEffect, useState} from "react";
import {StyleSheet, Text} from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";
import colors from "../config/colors";
import apiClient from "./../api/client";

function ProductEditandAddScreen(props) {
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

  return (
    <Screen>
      <AppForm
        initialValues={{mobileName: "", feature1: "",feature2: "",feature3: "",feature4: "", price: "", description: "",numberInStock: "", imageUrl:""}}
        onSubmit={values => registerUser(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
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
          name="ImageUrl"
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
