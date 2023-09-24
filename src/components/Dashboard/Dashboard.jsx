import React from "react";
import { useSelector } from "react-redux";
import { DiUnitySmall } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./Dashboard.css";
import Card from "../Card/Card";

const Dashboard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <DiUnitySmall />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {"  "}
                      {elem[index]?.title}  <span className="index">{elem[index]?.value?.length}</span>
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-20">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
