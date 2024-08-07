import React, { useState, useEffect } from 'react';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledDateSelectionForm = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledLabel = styled('label')({
  fontFamily: "'Fira Sans', sans-serif",
  fontWeight: '500',
  color: '#AFB9C0',
  fontSize: '1.15vw',
});

const StyledDateInput = styled('div')({
  '& .MuiInputBase-input': {
    fontFamily: "'Fira Sans', sans-serif",
    fontWeight: '400',
    borderRadius: '0.625vw',
    padding: '1vw 1.04vw 1vw 1.25vw',
    fontSize: '1.15vw',
    width: '22.2vw',
    height: '1.5vw',
    color: '#FFFFFF',
    backgroundColor: '#243745',
    borderColor: 'none',
  },
  '& .MuiTextField-root': {
    borderRadius: '0.625vw',
    backgroundColor: '#243745',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: '#728796'
  },
    
  marginTop: '0.9vw',
});

const StyledDatePickerPopup = styled('div')({
  backgroundColor: '#243745',
});

const DateSelectionForm = ({ onUpdate, birthday: initialbirthday }) => {
  const [selectedDate, setSelectedDate] = useState(
    initialbirthday ? dayjs(initialbirthday) : null
  );

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);

    if (onUpdate) {
      const formattedDate = newDate ? formatDateForSubmit(newDate) : null;
      onUpdate({ birthday: formattedDate });
    }
  };

  const formatDateForSubmit = (date) => {
    return date ? date.format('YYYY-MM-DD') : null;
  };

  useEffect(() => {
    if (initialbirthday) {
      setSelectedDate(dayjs(initialbirthday));
    }
  }, [initialbirthday]);

  return (
    <StyledDateSelectionForm>
      <StyledLabel htmlFor="dateInput">Date of birth</StyledLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDateInput>
          <DesktopDatePicker
            value={selectedDate}
            onChange={handleDateChange}
            PopoverProps={{
              className: StyledDatePickerPopup,
            }}
            renderInput={(params) => <TextField {...params} variant="standard" />}
          />
        </StyledDateInput>
      </LocalizationProvider>
    </StyledDateSelectionForm>
  );
};

export default DateSelectionForm;
