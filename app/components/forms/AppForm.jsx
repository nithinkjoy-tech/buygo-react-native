import React from "react";
import {View, StyleSheet} from "react-native";
import { Formik } from 'formik';
import { ScrollView } from "react-native";

function AppForm({initialValues, onSubmit, children, validationSchema}) {
  return (
    <ScrollView>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppForm;
