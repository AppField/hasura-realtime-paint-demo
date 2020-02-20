import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonLoading,
  IonAlert
} from "@ionic/react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

import ColorPicker from "./ColorPicker";
import Pixel from "./Pixel";
import "./Draw.css";

interface Pixel {
  id: number;
  color: string;
}

const GET_PIXELS = gql`
  subscription GetPixels {
    pixels(order_by: { id: asc }) {
      color
      id
    }
  }
`;

const Draw = () => {
  const [color, changeColor] = useState<string>("white");
  const { loading, error, data } = useSubscription(GET_PIXELS);

  if (loading) {
    return <IonLoading isOpen={true} message="Pixels are loading" />;
  }
  if (error) {
    return (
      <IonAlert isOpen={true} message="Pixels could not be loaded"></IonAlert>
    );
  }

  return (
    <IonCard className="drawCard">
      <IonCardHeader>
        <IonCardTitle>Pick a Color</IonCardTitle>
        <IonCardSubtitle>And a Pixel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <ColorPicker changeColor={changeColor} />

        <div className="ion-padding">
          <div className="container">
            {data.pixels.map((pixel: Pixel) => (
              <Pixel
                color={pixel.color}
                id={pixel.id}
                key={pixel.id}
                newColor={color}
              />
            ))}
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Draw;
