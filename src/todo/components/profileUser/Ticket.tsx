import React from 'react'
import { ticket } from '../../interfaces/interfaces'
import styled from 'styled-components';

const DivProductsTicket = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
    align-items: flex-start;

    @media (max-width:760px){
        display: flex;
        flex-direction: column;
    }
`
const Image = styled.img`
    height: 5rem;
`
const Fieldset = styled.fieldset`
    margin-top: 1rem;
    border: 0.1px solid #ccc;
    @media (max-width:760px){
        width: 13.3rem;
    }
`
const DivPropProduct = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width:760px){
        display: flex;
        flex-direction: row;
    }
`
function Ticket({id,ticketInfo}:{id:string, ticketInfo:ticket}) {
  const ticket = ticketInfo.ticket;
  console.log(ticket);
  
  return (
    <>
        {
            ticket.map(t => {
                return(
                    <Fieldset>
                        <DivProductsTicket>
                            <DivPropProduct>
                                <strong>ID</strong>
                                <span>{t.id}</span>
                            </DivPropProduct>
                            <DivPropProduct>
                                <strong>Image</strong>
                                <Image src={t.img}/>
                            </DivPropProduct>
                            <DivPropProduct>
                                <strong>Name</strong>
                                <span>{t.title}</span>
                            </DivPropProduct>
                            <DivPropProduct>
                                <strong>Gender</strong>
                                <span>{t.gender}</span>
                            </DivPropProduct>
                            <DivPropProduct>
                                <strong>Size</strong>
                                <span>{t.sizeSelected}</span>
                            </DivPropProduct>
                            <DivPropProduct>
                                <strong>Price</strong>
                                <span>{t.price}</span>
                            </DivPropProduct>
                            <DivPropProduct>
                                <strong>Quantity</strong>
                                <span>{t.quantity}</span>
                            </DivPropProduct>
                        </DivProductsTicket>
                    </Fieldset>
                )
            })
        }      
    </>
  )
}

export default Ticket