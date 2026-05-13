import { useState } from "react";

import ENVParent from "./ENVParent.jsx";
import ENVChild from "./ENVChild.jsx";
import ENVAddchild from "./ENVAddchild.jsx";

import "./ENV.css";

function ENVMain() {
  const [selectedParent, setSelectedParent] = useState("0100");

  const parentList = [
    {
      id: "0100",
      name: "설문 유형",
    },
    {
      id: "0200",
      name: "문의 유형",
    },
  ];

  const childList = [
    {
      id: "0101",
      name: "척도형",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0100",
    },
    {
      id: "0102",
      name: "직접입력형",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0100",
    },
    {
      id: "0103",
      name: "선택형",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0100",
    },
    {
      id: "0199",
      name: "기타",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0100",
    },

    {
      id: "0201",
      name: "이메일 문의",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0200",
    },
    {
      id: "0202",
      name: "전화 문의",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0200",
    },
    {
      id: "0203",
      name: "방문 문의",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0200",
    },
    {
      id: "0204",
      name: "기타 문의",
      writer: "관리자A",
      regDate: "2026-06-11 14:04:14",
      modifier: "관리자B",
      modDate: "2026-07-11 09:05:37",
      parentId: "0200",
    },
  ];

  const filteredChildList = childList.filter(
    (item) => item.parentId === selectedParent,
  );

  const selectedParentName = parentList.find(
    (item) => item.id === selectedParent,
  )?.name;

  return (
    <div className="wrapper">
      <div className="title-area">
        <h1>환경 변수 관리</h1>

        <p>시스템에서 사용하는 환경 변수를 관리합니다.</p>
      </div>

      <div className="content-area">
        <ENVParent
          parentList={parentList}
          selectedParent={selectedParent}
          setSelectedParent={setSelectedParent}
        />

        <div className="right-panel">
          <ENVChild
            selectedParentName={selectedParentName}
            filteredChildList={filteredChildList}
          />

          <ENVAddchild selectedParentName={selectedParentName} />
        </div>
      </div>
    </div>
  );
}

export default ENVMain;
