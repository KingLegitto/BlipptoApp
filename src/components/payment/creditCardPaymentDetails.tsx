import React, {ForwardedRef, forwardRef } from "react";
import { ReactComponent as PersonIcon } from "../../assets/person.svg";
import { ReactComponent as CvvIcon } from "../../assets/cvv.svg";
import { ReactComponent as ExpirationTimeIcon } from "../../assets/calendar.svg";
import { ReactComponent as CreditCardIcon } from "../../assets/creditCard.svg";
import { FormData, FormInputRefs } from "../../propTypes";

interface CreditCardProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => void;
  formData: FormData;
  inputRefs: React.RefObject<FormInputRefs>;
}

const CreditCardPaymentDetails: React.ForwardRefRenderFunction<HTMLDivElement,CreditCardProps> = ({
  handleInputChange,
  formData,
  inputRefs
}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="pt-3 transition duration-500 min-h-[250px] sm:min-h-[330px] 2xl:min-h-[350px] flex flex-col justify-between ease-in-out">
      <p className="text-base xl:text-2xl font-medium">Card Details</p>
      <div className="relative w-full h-9 sm:h-12 2xl:h-[3.2rem]">
        <div className="pointer-events-none absolute inset-y-0 left-2 xl:left-5 flex items-center pl-2 md:pl-3">
          <span className="text-gray-500 sm:text-sm">
            <PersonIcon className="scale-[0.7] xl:scale-75" />
          </span>
        </div>
        <input
          type="text"
          required
          ref={inputRefs.current?.cardHolderName}
          name="cardHolderName"
          className="block w-full rounded-[2rem] h-full bg-background border-[1px] border-black pl-12 sm:pl-14 2xl:pl-20 text-gray-900 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm leading-6"
          placeholder="Card Holder Name"
          value={(formData.card && formData.card.cardHolderName) || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "card")
          }
        />
      </div>
      <div className="relative w-full h-9 sm:h-12 2xl:h-[3.2rem]">
        <div className="pointer-events-none absolute inset-y-0 left-2 xl:left-5 flex items-center pl-2 md:pl-3">
          <span className="text-gray-500 text-xs sm:text-sm">
            <CreditCardIcon className="scale-[0.7] xl:scale-75" />
          </span>
        </div>
        <input
          type="number"
          required
          ref={inputRefs.current?.cardNumber}
          name="cardNumber"
          className="block w-full rounded-[2rem] h-full bg-background border-[1px] border-black pl-12 sm:pl-14 2xl:pl-20 text-gray-900 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm leading-6"
          placeholder="Card Number"
          value={(formData.card && formData.card.cardNumber) || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "card")
          }
        />
      </div>
      <div className="w-full flex h-9 sm:h-12 2xl:h-[3.2rem]">
        <div className="w-[50%] h-full mr-8 relative">
          <div className="pointer-events-none absolute inset-y-0 left-2 xl:left-5 flex items-center pl-2 md:pl-3">
            <span className="text-gray-500 text-xs sm:text-sm">
              <ExpirationTimeIcon className="scale-[0.7] xl:scale-75" />
            </span>
          </div>
          <input
            type="text"
            required
            ref={inputRefs.current?.expirationDate}
            name="expirationDate"
            className="block w-full rounded-[2rem] h-full bg-background border-[1px] border-black pl-12 sm:pl-14 2xl:pl-20 text-gray-900 outline-none focus:border-yellow-300 focus:border-2 text-xs sm:text-sm leading-6"
            placeholder="Exp. Date"
            value={(formData.card && formData.card.expirationDate) || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, "card")
            }
          />
        </div>
        <div className="w-[50%] h-full relative">
          <div className="pointer-events-none absolute inset-y-0 left-2 xl:left-5 flex items-center pl-2 md:pl-3">
            <span className="text-gray-500 text-xs sm:text-sm">
              <CvvIcon className="scale-[0.7] xl:scale-75" />
            </span>
          </div>
          <input
            type="number"
            required
            name="cvv"
            id="cvv"
            ref={inputRefs.current?.cvv}
            className="block w-full rounded-[2rem] h-full bg-background border-[1px] border-black pl-12 sm:pl-14 2xl:pl-20 text-gray-900 outline-0 focus:border-yellow-300 focus:border-2 text-xs sm:text-sm leading-6"
            placeholder="CVV"
            value={(formData.card && formData.card.cvv) || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, "card")
            }
          />
        </div>
      </div>
      <p className="ml-6">
        <input type="checkbox" className="mr-4" /> save this card details
      </p>
    </div>
  );
};

export default forwardRef(CreditCardPaymentDetails);
