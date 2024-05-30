import { Routes as RoutesContainer, Route } from "react-router-dom";

import Bar from "./pages/Bar";
import Calendar from "./pages/Calendar";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/Faq";
import Form from "./pages/Form";
import Geography from "./pages/Geography";
import Invoices from "./pages/Invoices";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import Team from "./pages/Team";

const Routes: React.FC = () => (
  <RoutesContainer>
    <Route path="/" element={<Dashboard />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/form" element={<Form />} />
    <Route path="/geography" element={<Geography />} />
    <Route path="/invoices" element={<Invoices />} />
    <Route path="/line" element={<Line />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/team" element={<Team />} />
    <Route path="/calendar" element={<Calendar />} />
  </RoutesContainer>
);

export default Routes;
