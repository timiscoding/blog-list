import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import FormBase from "../../Form";
import * as validators from "../../Form/validators";
import Button from "../../Button";
import Row from "../../Row";
import { ReactComponent as CommentIcon } from "../../../icons/message.svg";

const Form = styled(FormBase)`
  padding: 10px;
`;

const CommentForm = ({ onComment, pending, toggleableOpen }) => {
  const formRef = useRef();
  useEffect(() => {
    if (toggleableOpen) {
      formRef.current.focus();
    }
  }, [toggleableOpen]);

  const handleSubmit = async ({ comment }) => {
    const action = await onComment(comment);
    if (action.type.endsWith("SUCCESS")) {
      formRef.current.clear();
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef} pending={pending}>
      {({ errors, validity, submit }, { textarea }) => (
        <>
          <Form.Group>
            <Form.Control
              {...textarea("comment", validators.required())}
              valid={validity.comment}
              error={errors.comment}
              placeholder="Comment on this blog"
              autoComplete="off"
            />
          </Form.Group>
          <Row cols={1}>
            <Button
              onClick={submit}
              Icon={CommentIcon}
              appearance="primary"
              pending={pending}
            >
              Add comment
            </Button>
          </Row>
        </>
      )}
    </Form>
  );
};

CommentForm.propTypes = {
  onComment: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

export default CommentForm;
