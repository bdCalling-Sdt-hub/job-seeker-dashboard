import React, { useEffect, useRef, useState } from 'react';
import BackButton from "../Dashboard/BackButton";
import { MdOutlineFilterList } from 'react-icons/md';
import { FiEye, FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Calendar, Dropdown, Input, Slider, Table } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CiMenuKebab } from 'react-icons/ci';

const data = [
  {
    key: "1",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "2",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "3",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "4",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "5",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "6",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "7",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "8",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "9",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "10",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
];

const TotalSellerList = () => {
  const [value, setValue] = useState(new URLSearchParams(window.location.search).get('date') || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }));
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(new URLSearchParams(window.location.search).get('category') || "All")
  const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
  const [open, setOpen] = useState();
  const [filter, setFilter] = useState(false);
  const [date, setDate] = useState(false);
  const dropdownRef = useRef();
  const items = [
    {
      label: "All",
      key: "All",
    },
    {
      label: "Information technology",
      key: "Information technology",
    },
    {
      label: "Accounts",
      key: "Accounts",
    },
    {
      label: "Electrical engineer",
      key: "Electrical engineer",
    },
  ];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDate(false)
        setOpen("");
        setFilter(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Company Name",
      dataIndex: "companyname",
      key: "company",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <p
          style={{
            width: "88px",
            height: "31px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: record?.status === "Active" ? "#E0F9F7" : "#FFC3C3",
            color: record?.status === "Active" ? "#2FD5C7" : "#9C0101"
          }}
        >
          {record?.status}
        </p>
      )
    },


    {
      title: "ACTION",
      dataIndex: "printView",
      key: "printView",
      render: (_, record) => (
        <div style={{ position: "relative" }}>
          <Link to="/">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1" style={{ cursor: "pointer" }} />
          </Link>



        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  const onClick = ({ key }) => {
    setCategory(key)
    const params = new URLSearchParams(window.location.search);
    params.set('category', key);
    window.history.pushState(null, "", `?${params.toString()}`);
  };



  const onSelect = (newValue) => {
    const date = newValue.format('MMM-DD-YYYY')
    setValue(date);
    const params = new URLSearchParams(window.location.search);
    params.set('date', date);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <BackButton link="/" />
      </div>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#2F2F2F" }}>Total Employer List</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>


            <div
              style={{
                width: "304px",
                height: "30px",
                borderRadius: "8px"
              }}
            >
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Company"
                prefix={<FiSearch size={14} color="#868FA0" />}
                suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer" }} size={14} color="#2B2A2A" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px"
                }}
                size="middle"
                value={search}
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>

            <div
              style={{

                height: "30px",
                borderRadius: "8px",
                border: "1px solid #E9E9E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 8px",
                color: "#8B8B8B"
              }}
            >

              <Dropdown menu={{ items, onClick }} >
                <p
                  style={{
                    cursor: "pointer",
                    color: '#717171',
                    borderRadius: "4px",
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {category}
                  <DownOutlined style={{ paddingLeft: "18px" }} color='#717171' />
                </p>
              </Dropdown>
            </div>

          </div>
        </div>

        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default TotalSellerList