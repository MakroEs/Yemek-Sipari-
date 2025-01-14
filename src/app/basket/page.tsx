"use client";
import React, { useState } from "react";
import UiBasketFoodCard from "../Components/Ui/UiBasketFoodCard";
import { IoMdBasket } from "react-icons/io";
const Page = () => {
  const [address, setaddress] = useState<string>("");
  const [paymentMethod, setpaymentMethod] = useState<string>("");
  console.log(paymentMethod);
  return (
    <div className="container mx-auto mt-20 bg-sectionBg p-5 rounded-lg font-legend">
      <p className="text-2xl font-bold">Sepet</p>
      <div className="grid grid-cols-2 gap-x-5  ">
        <div>
          <UiBasketFoodCard
            image="/images/ui-food-card.png"
            title="Vermicelle Upma"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
            price="100Tl"
            quantity={1}
          />
          <UiBasketFoodCard
            image="/images/ui-food-card.png"
            title="Vermicelle Upma"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, "
            price="100Tl"
            quantity={1}
          />
          <UiBasketFoodCard
            image="/images/ui-food-card.png"
            title="Vermicelle Upma"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, doloremque dolores! Ex eveniet "
            price="100Tl"
            quantity={1}
          />
        </div>
        <div className="bg-sectionBg rounded-xl p-5">
          <div className="flex">
            <p className="text-3xl font-semibold">Adres Seçimi</p>
            <button className="self-end text-gray">Ekle</button>
          </div>

          <div className="mt-5">
            <select
              className="w-full bg-input py-2 px-3 rounded-lg"
              onChange={(e) => setaddress(e.target.value)}
            >
              <option value="1">Adres1</option>
              <option value="2">Adres2</option>
              <option value="3">Adres3</option>
              <option value="4">Adres4</option>
            </select>
          </div>
          <div className="bg-white rounded-xl p-5 mt-5">
            <div>
              <p className="text-3xl font-semibold">Ödeme Yöntemi</p>
            </div>
            <div className="mt-5">
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  id=""
                  value="cash"
                  onChange={(e) => setpaymentMethod(e.target.value)}
                />
                <span className="text-green">Nakit</span>
              </div>
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  id=""
                  value="creditCard"
                  onChange={(e) => setpaymentMethod(e.target.value)}
                />
                <span className="text-green">Kapıda Kredi Kartı</span>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button className="bg-green py-2 px-3 rounded-lg flex  items-center gap-x-2 ">
                <IoMdBasket size={30} />
                Sepete ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;