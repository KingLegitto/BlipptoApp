export const validateEmail = (emailAddress: string) => {
  const emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;
  return emailPattern.test(emailAddress);
};
