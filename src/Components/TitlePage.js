import React from "react";
import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";

function TitlePage(props) {
  return (
    <div>
      <Heading fontSize={26}>{props.title}</Heading>
      <Breadcrumb fontSize="sm" fontWeight="400" mt={3}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink disabled>New Bidding</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default TitlePage;
