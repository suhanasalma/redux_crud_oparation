import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UpdatePost from "../../Pages/UpdatePost/UpdatePost";
import { useDeletePostMutation } from "../../Redux/Posts/Posts";
import { FaEdit, FaTrash, FaFolderOpen } from "react-icons/fa";

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
      toast("Deleted Confirmed");
    } else {
      console.log("ok");
    }
  };
  return (
    <div key={info.id} class="col order-last ">
      <Card className="mb-4 homeCard">
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <Card.Text>{info.body}</Card.Text>
          <div className="d-flex gap-3">
            <button
              className="border-0 bg-transparent d-flex align-items-center gap-1 text-white fw-bold"
              onClick={() => setModalShow(true)}
              // to="/update"
            >
              <FaEdit />
              Edit
            </button>
            <Link
              className="text-decoration-none bg-transparent d-flex align-items-center gap-1 text-white fw-bold"
              onClick={() => handleDelete(info.id)}
            >
              <FaTrash />
              Delete
            </Link>
            <Link
              className="text-decoration-none bg-transparent d-flex align-items-center gap-1 text-white fw-bold"
              to={`/view/${info.id}`}
            ><FaFolderOpen/>
              View
            </Link>
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
