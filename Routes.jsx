/* eslint-disable react/prop-types */
import React, { lazy } from "react";

import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";

const Appointments = lazy(() => import("./components/appointments"));
const Specialities = lazy(() => import("./components/specialities"));
const Doctors = lazy(() => import("./components/doctors"));
const Patients = lazy(() => import("./components/patients"));
const Reviews = lazy(() => import("./components/reviews"));
const Transaction = lazy(() => import("./components/transaction"));
const Settings = lazy(() => import("./components/settings"));
const InvoiceReport = lazy(() =>
  import("./components/Reports/InvoiceReport/InvoiceReport")
);
const ProductList = lazy(() => import("./components/productlist"));
const PharmacyList = lazy(() => import("./components/pharmacylist"));
const Categories = lazy(() => import("./components/pharmacylist/Categories"));
const Blog = lazy(() => import("./components/Blog/blog"));
const BlogDetails = lazy(() => import("./components/Blog/blogdetails"));
const AddBlog = lazy(() => import("./components/Blog/addblog"));
const EditBlog = lazy(() => import("./components/Blog/editblog"));
const PendingBlog = lazy(() => import("./components/Blog/pendingblog"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Login = lazy(() => import("./components/login"));
const Register = lazy(() => import("./components/register"));
const ForgotPassword = lazy(() => import("./components/forgotpassword"));
const Lockscreen = lazy(() => import("./components/lockscreen"));
const Error = lazy(() => import("./components/error404"));
const ErrorPage = lazy(() => import("./components/error500"));
const BasicInput = lazy(() => import("./components/forms/baiscinput"));
const FormInput = lazy(() => import("./components/forminput"));
const FormHorizontal = lazy(() => import("./components/formhorizontal"));
const FormVertical = lazy(() => import("./components/formvertical"));
const FormMask = lazy(() => import("./components/formask"));
const FormValidation = lazy(() => import("./components/formvalidation"));
const BlankPage = lazy(() => import("./components/blankpage"));
const Components = lazy(() => import("./components/component"));
const DataTables = lazy(() => import("./components/datatables"));
const BasicTables = lazy(() => import("./components/basictables"));
const ProductCategories = lazy(() =>
  import("./components/productlist/ProductCategories")
);
const InvoiceReportList = lazy(() =>
  import("./components/Reports/InvoiceReport/InvoiceReportList")
);
import Layout from "./layout/Layout";

const Routes = function (props) {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Layout>
        <Route path="/" exact component={Dashboard} />
        <Route path="/forgotPassword" exact component={ForgotPassword} />
        <Route path="/lockscreen" exact component={Lockscreen} />
        <Route path="/appointment-list" exact component={Appointments} />
        <Route path="/specialities" exact component={Specialities} />
        <Route path="/doctor-list" exact component={Doctors} />
        <Route path="/patient-list" exact component={Patients} />
        <Route path="/reviews" exact component={Reviews} />
        <Route path="/transactions-list" exact component={Transaction} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/invoicerepot" exact component={InvoiceReport} />
        <Route path="/invoice" exact component={InvoiceReportList} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog-details" exact component={BlogDetails} />
        <Route path="/add-blog" exact component={AddBlog} />
        <Route path="/edit-blog" exact component={EditBlog} />
        <Route path="/pending-blog" exact component={PendingBlog} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/product-list" exact component={ProductList} />
        <Route path="/pharmacy-list" exact component={PharmacyList} />
        <Route path="/pharmacy-category" exact component={Categories} />
        <Route path="/404" exact component={Error} />
        <Route path="/500" exact component={ErrorPage} />
        <Route path="/blank-page" exact component={BlankPage} />
        <Route path="/components" exact component={Components} />
        <Route path="/basic-input" exact component={BasicInput} />
        <Route path="/form-input-group" exact component={FormInput} />
        <Route path="/form-horizontal" exact component={FormHorizontal} />
        <Route path="/form-vertical" exact component={FormVertical} />
        <Route path="/form-mask" exact component={FormMask} />
        <Route path="/form-validation" exact component={FormValidation} />
        <Route path="/tables-basic" exact component={BasicTables} />
        <Route path="/data-tables" exact component={DataTables} />
        <Route path="/product-category" exact component={ProductCategories} />
      </Layout>
    </Switch>
  );
};

export default Routes;
