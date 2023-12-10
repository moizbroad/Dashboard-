import React from "react";
import axios from "axios";
import { useState } from "react";

const Userapis = () => {
  
  const [users, setUsers] = useState({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });
  const [groups, setGroups] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(1);
  const [pagination, setPagination] = useState(1);

  const fetchData = async () => {
    console.log("data");  
    try {
      const [
        usersResponse,
        allUsersResponse,
        groupsResponse,
        rolesResponse,
        languagesResponse,
      ] = await Promise.all([
        axiosWithCredentials.get(
          `/company/users/in/company/?page=${pagination}`
        ),
        axiosWithCredentials.get(`/company/users/all`),
        axiosWithCredentials.get(`/company/groups/`),
        axiosWithCredentials.get(`/company/roles/`),
        axiosWithCredentials.get(`/company/language/`),
      ]);

      setUsers({
        results: usersResponse.data?.results,
        count: usersResponse.data?.count,
        next: usersResponse.data?.next,
        previous: usersResponse.data?.previous,
      }); 

      setAllUsers(allUsersResponse.data);
      setUsersCount(allUsersResponse.data?.length);
      setGroups(groupsResponse.data);
      setAllRoles(rolesResponse.data);
      setLanguages(languagesResponse.data);
    } catch (error) {
      console.warn("API Error", error);
    }
  };

  return <> </>;
};

export default Userapis;
