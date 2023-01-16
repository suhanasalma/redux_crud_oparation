import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import UpdatePost from "../../Pages/UpdatePost/UpdatePost";
import { useDeletePostMutation } from "../../Redux/Posts/Posts";

const HomeCard = ({ info }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [deletePost,res] = useDeletePostMutation()
//   console.log(res.isSuccess);
  const handleDelete =async (e) => {
    const confirmValue = window.confirm("are you sure to delete?");
    if (confirmValue) {
      console.log(e);
      await deletePost(e)
      console.log(res.isSuccess);
    } else {
      console.log("ok");
    }
  };
  return (
    <div key={info.id} class="col order-last">
      <Card className="mb-4  ">
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.body}</Card.Text>
          <div className="d-flex gap-2">
            <button
              className="border-0 bg-white text-danger"
              onClick={() => setModalShow(true)}
              // to="/update"
            >
              Edit
            </button>
            <Link onClick={() => handleDelete(info.id)}>Delete</Link>
            <Link to={`/view/${info.id}`}>View</Link>
          </div>
        </Card.Body>
      </Card>
      <UpdatePost
        info={info}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default HomeCard;
