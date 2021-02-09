import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers } from "../../redux/api";
import { usersList } from "../../redux/slices/usersSlice";
import { totalPagesSelector } from "../../redux/slices/responseDataSlice";
const UserCard = React.lazy(() => import("../UseCard/UserCard"));

const Users = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const usersCardList = useSelector(usersList);
  const totalPages = useSelector(totalPagesSelector);

  useEffect(() => {
    dispatch(asyncGetUsers(page));
  }, [page]);

  const showMore = () => {
    setPage((state) => state + 1);
  };

  return (
    <div className="users" id="users">
      <div className="container">
        <div className="users--wrapper">
          <h2 className="Heaging1">Our cheerful users</h2>
          <p className="paragraph component-users-subtitle">Attention! Sorting users by registration date</p>
          <div className="users--list">
            {usersCardList &&
              !!usersCardList.length &&
              usersCardList.map((el) => (
                <Suspense key={el.id} fallback={<div>Loading...</div>}>
                  <UserCard userInfo={el} />
                </Suspense>
              ))}
          </div>
          {page < totalPages && (
            <button className="Btn users--show-more" onClick={showMore}>
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
