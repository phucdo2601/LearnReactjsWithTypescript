import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import InnerContent from './components/InnerContent'
import Settings from './components/Settings'
import Tabs from './components/Tabs'
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoute from './components/PublicRoute';
import Users from './components/Users'
import SingleUser from './components/SingleUser'
import NewUser from './components/NewUser'

const RoutePages = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<InnerContent />} >
              {/* Cach 1: thong thuong dung tu khoa index de chuyen huong nhung phan tu mac dinh ko nhap vao  */}
              {/* <Route index element={<Dashboard />} /> */}
              {/* Cach 2: dung Navigate de chuyen huong thang de route da dc khai bao  */}
              <Route path="/" element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="tabs" element={<Tabs />} >
                <Route path="/tabs" element={<Navigate replace to="tab1" />} />
                <Route path="tab1" element={<Tab1 />} />
                <Route path="tab2" element={<Tab2 />} />
                <Route path="tab3" element={<Tab3 />} />
              </Route>
              <Route path="settings" element={<Settings />} />
              <Route path="Users" element={<Users extraItem="Test By Phuc Do" />} />
              <Route path="users/:userId" element={<SingleUser />} />
              <Route path="users/new" element={<NewUser />} />
            </Route>
          </Route>

          <Route path="login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route >

        </Routes>
      </div>
    </>
  )
}

export default RoutePages