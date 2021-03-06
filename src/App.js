import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { invoiceData } from "./data";
import UseWindowDimension from "./components/common/UseWindowDimension";
import NavBar from "./components/NavBar";
import Invoices from "./components/invoices/Invoices";
import ViewInvoice from "./components/viewInvoice/ViewInvoice";
import EditInvoice from "./components/editInvoice/EditInvoice";
import getFirebase from "./firebase";
import SignInForm from "./components/auth/Login";
import CreateInvoice from "./components/createInvoice/CreateInvoice";

function App() {
  const [theme, setTheme] = useState("dark");
  const { width: deviceWidth } = UseWindowDimension();
  const [invoices, setInvoices] = useState(invoiceData);
  const [selectedInvoice, setSelectedInvoice] = useState(invoiceData[0]);
  const [currentUser, setCurrentUser] = useState(null);

  function handleThemeToggle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  function handleInvoiceSelect(invoice) {
    setSelectedInvoice(invoice);
  }

  function handleSave(invoice) {
    const newInvoices = [...invoices];
    const index = newInvoices.findIndex(
      (newInvoice) => newInvoice.id === invoice.id
    );
    newInvoices[index] = invoice;
    setInvoices(newInvoices);
    setSelectedInvoice(invoice);
  }

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {currentUser ? (
        <>
          <NavBar onThemeToggle={handleThemeToggle} />
          <Switch>
          <Route
              path="/invoices/new"
              render={() => (
                <CreateInvoice
                  deviceWidth={deviceWidth}
                />
              )}
            />
            <Route
              path="/invoices/edit/:id"
              render={(props) => (
                <EditInvoice
                  invoice={selectedInvoice}
                  onSave={handleSave}
                  {...props}
                />
              )}
            />
            <Route
              path="/invoices/:id"
              render={() => (
                <ViewInvoice
                  invoice={selectedInvoice}
                  deviceWidth={deviceWidth}
                />
              )}
            />
            <Route
              path="/invoices"
              render={() => (
                <Invoices
                  invoices={invoices}
                  handleInvoiceSelect={handleInvoiceSelect}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={() => (
                <Invoices
                  invoices={invoices}
                  handleInvoiceSelect={handleInvoiceSelect}
                />
              )}
            />
            
          </Switch>
        </>
      ) : (
        <SignInForm />
      )}
    </ThemeProvider>
  );
}

export default App;
