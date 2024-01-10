import React from "react";

const ProductDetailView = (props) => {

    return(
        <Card sx={{}}>
            <CardContent>
                <Typography sx={{marginBottom: -5}}>
                    {props.product.category}
                </Typography>
            </CardContent>
            <CardHeader 
                title={props.product.title} 
                sx = {{height:1/6}}/>
            <CardMedia
                component="img"
                image={props.product.image}
                alt={props.product.title}
                sx = {{height:1/3}}
            />
            <Container sx={{justifyContent:"flexStart", display:"flex", margin:"none", paddingRight: 10/100}}>
                <Rating name="half-rating" defaultValue={props.product.rating.rate} precision={0.1} size="medium" />
                <Chip label={props.product.rating.count} variant="outlined" size="small"/>
            </Container>
            <CardContent>
                <Typography>
                    ${props.product.price}
                </Typography>
                <Typography>
                    {props.product.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductDetailView;

