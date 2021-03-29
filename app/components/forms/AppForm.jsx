import React from "react";
import {View, StyleSheet} from "react-native";
import { Formik } from 'formik';

function AppForm({initialValues, onSubmit, children, validationSchema}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppForm;
