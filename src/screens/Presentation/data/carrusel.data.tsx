import { Image } from "react-native";
import { Ionicons, Foundation, MaterialIcons } from "@expo/vector-icons";
import { CarruselItemProps } from "../interfaces";

export const carruselData: CarruselItemProps[] = [
  {
    id: 1,
    title: "Todo siempre en la mano",
    text: " Conoce tu monto a pagar y los últimos pagos realizados",
    uri: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1658611321/app_mercado_lomas/aplicacion_imagen_tlejth.svg",
    // Icon: () => <Image source={logo} style={{ width: 150, height: 150 }} />,
  },
  {
    id: 2,
    title: "Recibe Notificaciones",
    text: "Recibe notificaciones de los pagos realizados y pagos que están pendientes",
    uri: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1658611761/app_mercado_lomas/notificaciones_fdbcoz.svg",
    // Icon: () => <Ionicons name="notifications-outline" size={150} color="white" />,
  },
  {
    id: 3,
    title: "Historial de Pagos",
    text: "Podrás ver tu historial de pagos",
    uri: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1658611741/app_mercado_lomas/historial_h0xadu.svg",
    // Icon: () => <Foundation name="dollar-bill" size={150} color="white" />,
  },
  {
    id: 4,
    title: "Boleta Pagos",
    text: "Podras descargar tu boleta de pagos",
    uri: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1658611763/app_mercado_lomas/pagos_onlines_cl9gii.svg",
    // Icon: () => <MaterialIcons name="history" size={150} color="white" />,
  },
];
