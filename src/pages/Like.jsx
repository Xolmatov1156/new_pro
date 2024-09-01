import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Like() {
    const likedItems = useSelector((state) => state.likeList.saveLikeList);

    return (
        <div className="bg-violet-500">
            <ul className="w-[1500px] mx-auto flex flex-wrap gap-[15px] pt-[10px] pb-[20px]">
                {likedItems.length > 0 ? (
                    likedItems.map((item) => (
                        <li key={item.id}>
                            <Card className="w-[350px] h-[400px] ml-[12px] p-[10px] bg-white rounded-lg flex flex-col justify-between">
                                <CardContent>
                                    <Typography className="text-center text-[14px]">
                                        {item.title.length > 14
                                            ? item.title.slice(4)
                                            : item.title}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    image={
                                        item.image
                                            ? item.image
                                            : "defaultImage.jpg"
                                    }
                                    className="!w-[150px] !m-auto object-cover"
                                    alt={item.title}
                                />
                                <Button startIcon={<ShoppingBasketIcon/>} variant="contained" color="secondary">
                                    Order
                                </Button>
                            </Card>
                        </li>
                    ))
                ) : (
                    <div className="absolute top-[400px] left-0 right-0">
                        <p className="text-center text-white text-[30px]">
                            No liked products found.
                        </p>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default Like;
