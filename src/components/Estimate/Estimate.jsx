import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Chip,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { servicesContent } from "../../constants";

const Estimate = () => {
  const [lotSize, setLotSize] = useState("");
  const [dateRequested, setDateRequested] = useState("");
  const [serviceAddress, setServiceAddress] = useState("");
  const [servicesRequested, setServicesRequested] = useState([]);
  const [repeatService, setRepeatService] = useState(false);

  const handleServiceChange = (event) => {
    setServicesRequested(event.target.value);
  };

  const isFormValid = () => {
    return (
      lotSize &&
      servicesRequested.length >= 1 &&
      dateRequested &&
      serviceAddress
    );
  };

  return (
    <div className='p-4 md:p-8 border border-green-500 bg-[#eeeeee] rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto'>
      <h1 className='text-2xl font-bold mb-8'>Request Estimate</h1>

      <form>
        <div className='mb-4'>
          <TextField
            fullWidth
            style={{ maxWidth: "500px", backgroundColor: "white" }}
            label='Lot/Yard Size'
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            variant='outlined'
          />
        </div>

        <div className='mb-4'>
          <FormControl
            fullWidth
            variant='outlined'
            style={{ maxWidth: "500px", backgroundColor: "white" }}
          >
            <InputLabel>Service(s) Requested</InputLabel>
            <Select
              multiple
              value={servicesRequested}
              onChange={handleServiceChange}
              label='Services Requested'
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    width: 250,
                  },
                },
              }}
              renderValue={(selected) => {
                if (selected.length === 0) return "";
                if (selected.length === 1) return selected[0];
                if (selected.length <= 3) return selected.join(", ");
                return `${selected.length} services selected`;
              }}
            >
              {servicesContent.map((service) =>
                service.details.map((detail) => (
                  <MenuItem key={detail} value={detail}>
                    {detail}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </div>

        <div className='mb-4'>
          <TextField
            fullWidth
            style={{ maxWidth: "500px", backgroundColor: "white" }}
            label='Service Address'
            value={serviceAddress}
            onChange={(e) => setServiceAddress(e.target.value)}
            variant='outlined'
          />
        </div>

        <div className='mb-4'>
          <TextField
            fullWidth
            style={{ maxWidth: "500px", backgroundColor: "white" }}
            label='Service Date'
            type='date'
            value={dateRequested}
            onChange={(e) => setDateRequested(e.target.value)}
            variant='outlined'
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className='mb-4'>
          <FormControlLabel
            control={
              <Checkbox
                checked={repeatService}
                onChange={(e) => setRepeatService(e.target.checked)}
              />
            }
            label='Repeat Service'
          />
        </div>

        <Button
          variant='contained'
          color='success'
          className='mt-10 bg-black'
          disabled={!isFormValid()}
        >
          Submit
        </Button>
      </form>
      <div className='mt-6 p-4 border border-green-500 rounded bg-white'>
        <h2 className='text-xl font-medium mb-4'>Selected Services</h2>
        <ul>
          {servicesRequested.map((service, index) => (
            <li key={index} className='mb-2'>
              <Chip
                label={service}
                onDelete={() => {
                  setServicesRequested((prev) =>
                    prev.filter((prevService) => prevService !== service)
                  );
                }}
                deleteIcon={<Close />}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Estimate;
