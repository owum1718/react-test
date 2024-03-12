import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Grid, Checkbox, FormControlLabel } from '@mui/material';

const SelectField = () => {
  const [serviceNeeded, setServiceNeeded] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [howHeard, setHowHeard] = useState('');
  const [reschedule, setReschedule] = useState('');
  const [sqFootage, setSqFootage] = useState('');
  const [numFurnace, setNumFurnace] = useState('');
  const [furnaceLocation, setFurnaceLocation] = useState('');
  const [experiencing, setExperiencing] = useState('');
  const [earlierAppointment, setEarlierAppointment] = useState(false);

  const handleChange = (event) => {
    setServiceNeeded(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="service-needed-label">Service Needed *</InputLabel>
        <Select
          labelId="service-needed-label"
          id="service-needed-select"
          value={serviceNeeded}
          label="Service Needed*"
          onChange={handleChange}
        >
          <MenuItem value="">Select Service</MenuItem>
          <MenuItem value="Residential Air Duct Cleaning">Residential Air Duct Cleaning</MenuItem>
          <MenuItem value="Commercial Air Duct Cleaning">Commercial Air Duct Cleaning</MenuItem>
          <MenuItem value="Insulation">Insulation</MenuItem>
          <MenuItem value="Duct Sealing Powered By Aeroseal®">Duct Sealing Powered By Aeroseal®</MenuItem>
          <MenuItem value="Duct Lining Powered By Armor">Duct Lining Powered By Armor</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="first-name"
            label="First Name*"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="last-name"
            label="Last Name*"
            placeholder="Last Name*"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        id="zip"
        label="Zip *"
        placeholder="Zip *"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        style={{ marginTop: '20px' }}
      />

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="city"
            label="City *"
            placeholder="City *"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="state"
            label="State *"
            placeholder="State *"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        id="address"
        label="Address *"
        placeholder="Address *"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ marginTop: '20px' }}
      />

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="phone"
            label="Phone *"
            placeholder="Phone *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="email"
            label="Email *"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        id="how-heard"
        label="How did you hear about Amistee? *"
        placeholder="How did you hear about Amistee? *"
        value={howHeard}
        onChange={(e) => setHowHeard(e.target.value)}
        style={{ marginTop: '20px' }}
      />

      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel id="reschedule-label">Are you Re-Scheduling your existing appointment? *</InputLabel>
        <Select
          labelId="reschedule-label"
          id="reschedule-select"
          value={reschedule}
          label="Are you Re-Scheduling your existing appointment? *"
          onChange={(e) => setReschedule(e.target.value)}
        >
          <MenuItem value="">Select Option</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="sq-footage"
        label="Approx. Sq. Footage of Living Space (not including basement) *"
        placeholder="Approx. Sq. Footage *"
        type="number"
        value={sqFootage}
        onChange={(e) => setSqFootage(e.target.value)}
        style={{ marginTop: '20px' }}
      />

      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel id="num-furnace-label">Select Number Of Furnace *</InputLabel>
        <Select
          labelId="num-furnace-label"
          id="num-furnace-select"
          value={numFurnace}
          label="Select Number Of Furnace *"
          onChange={(e) => setNumFurnace(e.target.value)}
        >
          <MenuItem value="">Select Number Of Furnace</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3+">3+</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel id="furnace-location-label">Select Location Of Your Furnace *</InputLabel>
        <Select
          labelId="furnace-location-label"
          id="furnace-location-select"
          value={furnaceLocation}
          label="Select Location Of Your Furnace *"
          onChange={(e) => setFurnaceLocation(e.target.value)}
        >
          <MenuItem value="">Select Location Of Your Furnace</MenuItem>
          <MenuItem value="Basement">Basement</MenuItem>
          <MenuItem value="Crawl Space">Crawl Space</MenuItem>
          <MenuItem value="Attic">Attic</MenuItem>
          <MenuItem value="Slab">Slab</MenuItem>
          <MenuItem value="Unknown">Unknown</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel id="experiencing-label">Are You Experiencing any of the following? *</InputLabel>
        <Select
          labelId="experiencing-label"
          id="experiencing-select"
          value={experiencing}
          label="Are You Experiencing any of the following? *"
          onChange={(e) => setExperiencing(e.target.value)}
        >
          <MenuItem value="">Select Option</MenuItem>
          <MenuItem value="Dirt and Sand in Ducts">Dirt and Sand in Ducts</MenuItem>
          <MenuItem value="Moisture Problem">Moisture Problem</MenuItem>
          <MenuItem value="Poor Airflow">Poor Airflow</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={earlierAppointment}
            onChange={(e) => setEarlierAppointment(e.target.checked)}
            name="earlierAppointment"
          />
        }
        label="If possible, I'd like an earlier appointment. Please add me to the cancellation list"
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default SelectField;
