import LayoutDefault from './../../layouts/default';
import { useSelector, useDispatch } from "react-redux";

export default function UsersPage({ userRepos }) {
    const data = useSelector(state => state.user.value)

    const html = (
        <LayoutDefault>
            <div className="p-8">
                {data}
                <h3 className="text-xl font-semibold">Github User</h3>
                <div className="py-8 flex flex-wrap ">
                    {
                        userRepos.map((data, idx) =>
                        (
                            <div key={idx} style={{ cursor: 'pointer' }} className="w-[300px] h-auto drop-shadow-md rounded-xl p-4 mx-2 mb-5 bg-slate-50 flex flex-col justify-between">
                                <div>
                                    <p className="text-xl font-bold">
                                        {data.name}
                                    </p>
                                    <p className="text-sm">
                                        {data.description}
                                    </p>
                                </div>

                                <div className="pt-5 flex">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>

                                        <span className="text-xs pl-2">{data.stargazers_count}</span>
                                    </div>
                                    <div className="flex pl-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>


                                        <span className="text-xs pl-2">{data.watchers_count}</span>
                                    </div>
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
        `https://api.github.com/users/mojombo/repos`,
        {
            method: 'GET'
        }
    );

    const userRepos = await res.json()
    console.log(userRepos)
    return {
        props: {
            userRepos,
        },
    };
}