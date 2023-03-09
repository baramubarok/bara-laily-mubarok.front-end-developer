import React from 'react'
import Link from 'next/link';
import LayoutDefault from './../layouts/default';
import { useSelector, useDispatch } from "react-redux";
import { setDataValue } from '../store/userSlice';

export default function Home({ userData }) {

  const dispatch = useDispatch()
  const data = useSelector(state => state.user.value)

  function saveUser(data) {
    dispatch(setDataValue(data))
  }

  const html = (
    <LayoutDefault>
      <div className="p-8">
        <h3 className="text-xl font-semibold">Github User</h3>
        <div className="py-8 flex flex-wrap justify-center">
          {
            userData.map((data, idx) =>
            (
              <div key={idx} style={{ cursor: 'pointer' }} className="w-[300px] h-[100px] drop-shadow-md rounded-xl p-4 mx-2 mb-5 bg-slate-50  flex">
                <img src={data.avatar_url} className="w-[50px] h-[50px] rounded-full self-center"></img>
                <div className="pl-3 self-center">
                  <p className="text-xl font-bold">
                    {data.login}
                  </p>
                  <p className="text-sm" onClick={saveUser(data.repos_url)}>
                    Open repo
                  </p>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </LayoutDefault>
  )

  return html
}

export async function getServerSideProps(contex) {

  const res = await fetch(
    `https://api.github.com/users`,
    {
      method: 'GET'
    }
  );

  const userData = await res.json()

  return {
    props: {
      userData,
    },
  };
}
