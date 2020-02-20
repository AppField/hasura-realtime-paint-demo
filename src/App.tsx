import React, { useState } from "react";
import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Layout from "./components/Layout";
import ColorPicker from "./components/ColorPicker";
import Pixel from "./components/Pixel";
import "./App.css";

const pixels = new Array(400).fill("white");

const App: React.FC = () => {
  const [color, changeColor] = useState<string>("white");

  return (
    <IonApp>
      <Layout title="Draw Pixelart">
        <IonCard className="drawCard">
          <IonCardHeader>
            <IonCardTitle>Pick a Color</IonCardTitle>
            <IonCardSubtitle>And a Pixel</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <ColorPicker changeColor={changeColor} />

            <div className="ion-padding">
              <div className="container">
                {pixels.map((pixel, idx) => (
                  <Pixel color={pixel} key={idx} newColor={color} />
                ))}
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </Layout>
    </IonApp>
  );
};

export default App;
