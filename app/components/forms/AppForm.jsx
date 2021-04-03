import React from "react";
import { Formik } from 'formik';
import { ScrollView } from "react-native";

function AppForm({initialValues, onSubmit, children, validationSchema}) {
  return (
    <ScrollView>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
    </ScrollView>
  );
}

export default AppForm;
