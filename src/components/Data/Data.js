import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Input,
  Label,
  Error,
  InputBox,
} from '../../layout/index';

const Data = ({
  onSubmit,
  onChange,
  nickNameError,
  emailError,
  ipAdressError,
  isEnabled,
}) => {
  let errorIP;
  let errorEmail;
  let errorNickname;

  if (nickNameError) {
    errorNickname = <Error>{nickNameError}</Error>;
  }

  if (ipAdressError) {
    errorIP = <Error>{ipAdressError}</Error>;
  }

  if (emailError) {
    errorEmail = <Error>{emailError}</Error>;
  }

  return (
    <Form onSubmit={onSubmit} autoComplete="off" noValidate>
      <Label htmlFor="nickname">Nickname</Label>
      <InputBox>
        <Input type="text" id="nickname" name="nickname" onChange={onChange} />
        {errorNickname}
      </InputBox>
      <Label htmlFor="email">Email</Label>
      <InputBox>
        <Input type="email" id="email" name="email" onChange={onChange} />
        {errorEmail}
      </InputBox>
      <Label htmlFor="ipadress">IP adress</Label>
      <InputBox>
        <Input type="text" id="ipadress" name="ipadress" onChange={onChange} />
        {errorIP}
      </InputBox>
      <Button type="submit" disabled={!isEnabled}>
        Add User
      </Button>
    </Form>
  );
};

export default Data;

Data.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  nickNameError: PropTypes.string,
  emailError: PropTypes.string,
  ipAdressError: PropTypes.string,
  isEnabled: PropTypes.bool,
};
